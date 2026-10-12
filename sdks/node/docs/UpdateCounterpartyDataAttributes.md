# UpdateCounterpartyDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plaidProcessorToken** | **string** | Optional, unless updating a Plaid counterparty. Plaid integration token&lt;br /&gt;See Plaid processor token | [optional] [default to undefined]
**verifyName** | **boolean** | Optional, default to false. Verify the name of the counterparty, if the name verification fails the request will fail with code field set to NameVerificationFailed. | [optional] [default to undefined]
**permissions** | **string** | Optional, custom counterparty permissions. Either CreditOnly, DebitOnly, CreditAndDebit. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]

## Example

```typescript
import { UpdateCounterpartyDataAttributes } from 'unit-openapi-node-sdk';

const instance: UpdateCounterpartyDataAttributes = {
    plaidProcessorToken,
    verifyName,
    permissions,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
