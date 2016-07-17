/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
///<reference path="./IWireable.ts" />
///<reference path="./IHookable.ts" />

namespace io.github.dimous.reviews {
    export interface IInjectable extends IWireable, IHookable {}
}