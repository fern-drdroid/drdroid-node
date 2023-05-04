/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DrDroid from "../../api";
import * as core from "../../core";

export const DictValue: core.serialization.ObjectSchema<serializers.DictValue.Raw, DrDroid.DictValue> =
    core.serialization.object({
        kvlistValue: core.serialization.property(
            "kvlist_value",
            core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).KeyValue))
        ),
    });

export declare namespace DictValue {
    interface Raw {
        kvlist_value: serializers.KeyValue.Raw[];
    }
}
