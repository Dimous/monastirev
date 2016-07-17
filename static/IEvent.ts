/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
 namespace io.github.dimous.reviews {
    export interface IEvent {
        getData(): any;
        setData(__any_data: any): IEvent;

        getType(): string;
        setType(__string_type: string): IEvent;

        getTarget(): any;
        setTarget(__any_target: any): IEvent;
    }
}