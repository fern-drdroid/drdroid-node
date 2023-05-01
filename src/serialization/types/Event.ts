/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { Cakework } from "@fern-api/drdroid";
import * as core from "../../core";

export const Event: core.serialization.ObjectSchema<serializers.Event.Raw, Cakework.Event> = core.serialization.object({
    name: core.serialization.string(),
    timestamp: core.serialization.date().optional(),
    kvs: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
});

export declare namespace Event {
    interface Raw {
        name: string;
        timestamp?: string | null;
        kvs: Record<string, unknown>;
    }
}
