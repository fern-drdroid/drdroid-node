# Doctor Droid Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/drdroid)](https://www.npmjs.com/package/@fern-api/drdroid)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Doctor Droid Node.js library provides access to the Doctor Droid API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://docs.drdroid.io/reference/overview).

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-tnryds?file=app.ts)

```typescript
import { DrDroidClient } from "@fern-api/drdroid";

const client = new DrDroidClient({
    token: "YOUR_TOKEN",
});

client.publish("Order_Created", {
    ID: "13432",
    City: "BLR",
    IS_COD: false,
});
```

### Specify your own timestamp

If you want to publish with a certain timestamp and not default to the current system time, you can pass an event time.

```typescript
client.publish(
    "Order_Created",
    {
        ID: "13432",
        City: "BLR",
        IS_COD: false,
    },
    new Date(2023, 4, 4, 10, 30, 0)
);
```

### Buffering

The SDK buffers events and sends them in batches every 2 seconds. 

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
