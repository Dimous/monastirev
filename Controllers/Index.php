<?php
/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */

namespace Controllers {
    final class Index extends \Core\ViewController {
        private $__oPdo = NULL;
        
        protected $_sTemplateFileName = "Views/main.php";
        
        const THUMB_WIDTH = 320, THUMB_HEIGHT = 240;
        ///
        function __construct($oSettings) {
            parent::__construct();
            ///
            $this->__oPdo = new \PDO("mysql:host={$oSettings["db"]["host"]};dbname={$oSettings["db"]["dbname"]};charset=utf8", $oSettings["db"]["dbuser"], $oSettings["db"]["dbpassword"]);
            ///
            $this->__oPdo->exec("set names utf8"); // если проигнорирует при подключении
        }
        //---
        
        public function index() {
            return $this->_oTemplate->render("Views/index.phtml");
        }
        //---
        
        public function getReviews() {
            $aReviews = [];
            ///
            try {
                foreach ($this->__oPdo->query("SELECT *, state + 0 AS state FROM reviews WHERE status = 1")->fetchAll() as $oReview)
                    $aReviews[] = ["state" => (int) $oReview["state"], "date" => $oReview["date"], "name" => $oReview["name"], "email" => $oReview["email"], "text" => $oReview["text"], "image" => $oReview["image"]];    
            } catch (\PDOException $oPDOException) {
            }
            ///
            if (! headers_sent())
                header("Content-Type: application/json");
            ///
            return json_encode($aReviews);
        }
        //---
        
        public function postReview() {
            $sImageName = NULL;
            ///
            if (UPLOAD_ERR_OK === $_FILES["image"]["error"] && in_array($_FILES["image"]["type"], ["image/jpeg", "image/gif", "image/png"])) {
                $sImageName = "thumb_{$_FILES["image"]["name"]}";
                $oImageMagic = new \Imagick($_FILES["image"]["tmp_name"]);
                ///
                if (self::THUMB_WIDTH < $oImageMagic->getimagewidth() || self::THUMB_HEIGHT < $oImageMagic->getimageheight()) $oImageMagic->thumbnailimage(self::THUMB_WIDTH, self::THUMB_HEIGHT, TRUE);
                ///
                $oImageMagic->writeimage(sprintf("%s/../static/images/%s", __DIR__, $sImageName));
                $oImageMagic->destroy();                
            }
            ///
            $oStatement = $this->__oPdo->prepare("INSERT INTO reviews(status, state, date, name, email, text, image) VALUES(0, 1, :date, :name, :email, :text, :image)");
            ///
            $oStatement->bindParam(":date", strval(1000 * time()), \PDO::PARAM_STR); // храним как набор символов, чтобы не делать сложных преобразований для js (дата в миллисекундах)
            $oStatement->bindParam(":name", filter_input(INPUT_POST, "name", FILTER_SANITIZE_FULL_SPECIAL_CHARS), \PDO::PARAM_STR);
            $oStatement->bindParam(":text", filter_input(INPUT_POST, "text", FILTER_SANITIZE_FULL_SPECIAL_CHARS), \PDO::PARAM_STR);
            $oStatement->bindParam(":email", filter_input(INPUT_POST, "email", FILTER_SANITIZE_FULL_SPECIAL_CHARS), \PDO::PARAM_STR);
            $oStatement->bindParam(":image", $sImageName, \PDO::PARAM_STR);
            ///
            $oStatement->execute();
        }
    }
}
?>
