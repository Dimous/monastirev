/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
namespace io.github.dimous.reviews {
    export type TReview = {
        date: number;
        name: string | null;
        text: string | null;
        email: string | null;
        image: string | null;
        state: number;
        preview?: boolean;
        
        [__string_key: string]: any;
    };
}