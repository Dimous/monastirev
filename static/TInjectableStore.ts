/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
///<reference path="./IInjectable.ts" />

namespace io.github.dimous.reviews {
    export type TInjectableStore = {
        [__string_name: string]: IInjectable;
    };
}