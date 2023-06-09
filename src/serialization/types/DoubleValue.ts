/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DrDroid from "../../api";
import * as core from "../../core";

export const DoubleValue: core.serialization.ObjectSchema<serializers.DoubleValue.Raw, DrDroid.DoubleValue> =
    core.serialization.object({
        doubleValue: core.serialization.property("double_value", core.serialization.number()),
    });

export declare namespace DoubleValue {
    interface Raw {
        double_value: number;
    }
}
