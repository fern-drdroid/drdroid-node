/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DrDroid from "../../api";
import * as core from "../../core";

export const IntValue: core.serialization.ObjectSchema<serializers.IntValue.Raw, DrDroid.IntValue> =
    core.serialization.object({
        intValue: core.serialization.property("int_value", core.serialization.number()),
    });

export declare namespace IntValue {
    interface Raw {
        int_value: number;
    }
}
