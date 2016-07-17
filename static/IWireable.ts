/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
namespace io.github.dimous.reviews {
    export interface IWireable {
        getName(): string;
        onRegister(): void;
        onUnregister(): void;
    }
}