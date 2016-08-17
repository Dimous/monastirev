<?php
/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */

namespace core {
    class BaseController {
        protected $_oTemplate = NULL;
        ///
        public function __construct() {
            $this->_oTemplate = new Template($this->_sTemplateFileName);
        }
    }    
}
?>
