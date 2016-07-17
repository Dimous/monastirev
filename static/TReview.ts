/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
namespace io.github.dimous.reviews {
    export type TReview = {
        date: number;
        name: string;
        text: string;
        email: string;
        image: string;
        state: number;
        preview?: boolean;
        
        [__string_key: string]: any;
    };
}