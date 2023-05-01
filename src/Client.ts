/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Cakework } from "@fern-api/drdroid";
import urlJoin from "url-join";
import * as serializers from "./serialization";
import * as errors from "./errors";

export declare namespace CakeworkClient {
    interface Options {
        environment?: environments.CakeworkEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class CakeworkClient {
    constructor(private readonly options: CakeworkClient.Options) {}

    /**
     * Allows users to send events to Doctor Droid
     */
    public async publish(request: Cakework.SendEventsRequest): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CakeworkEnvironment.Production,
                "/e/ingest/events/v3"
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.SendEventsRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CakeworkError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CakeworkError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CakeworkTimeoutError();
            case "unknown":
                throw new errors.CakeworkError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
