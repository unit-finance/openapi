# DeviceFingerprintType

A device fingerprint used for fraud and risk prevention. See Device Fingerprints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **string** | The device fingerprint value produced by the provider\&#39;s SDK. | [default to undefined]
**provider** | **string** | The device fingerprint provider (e.g. \&quot;iovation\&quot;). | [default to undefined]

## Example

```typescript
import { DeviceFingerprintType } from '@unit-finance/unit-node-sdk';

const instance: DeviceFingerprintType = {
    value,
    provider,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
