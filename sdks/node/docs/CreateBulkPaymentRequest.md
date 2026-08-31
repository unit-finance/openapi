# CreateBulkPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;CreateBulkPaymentRequestDataInner&gt;**](CreateBulkPaymentRequestDataInner.md) | Array of payment creation payloads. ACH, Book, and Wire types may be mixed in the same bulk. | [default to undefined]

## Example

```typescript
import { CreateBulkPaymentRequest } from '@unit-finance/unit-node-sdk';

const instance: CreateBulkPaymentRequest = {
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
