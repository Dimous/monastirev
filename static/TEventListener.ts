/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
namespace io.github.dimous.reviews {
    export type TEventListener = {
        (__event: IEvent): void;
    };
}