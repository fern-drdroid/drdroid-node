/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DrDroid from "../../api";
import * as core from "../../core";

export const KeyValue: core.serialization.ObjectSchema<serializers.KeyValue.Raw, DrDroid.KeyValue> =
    core.serialization.object({
        key: core.serialization.string(),
        value: core.serialization.lazy(async () => (await import("..")).Value),
    });

export declare namespace KeyValue {
    interface Raw {
        key: string;
        value: serializers.Value.Raw;
    }
}