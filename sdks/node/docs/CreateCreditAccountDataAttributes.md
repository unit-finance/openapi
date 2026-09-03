# CreateCreditAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creditTerms** | **string** | The credit terms that will be associated with the account. | [default to undefined]
**creditLimit** | **number** | The credit limit of the account (in cents). | [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional. See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { CreateCreditAccountDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: CreateCreditAccountDataAttributes = {
    creditTerms,
    creditLimit,
    tags,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
