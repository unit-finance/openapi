# CreateCounterpartyWithPlaidTokenDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Either Business, Person or Unknown | [default to undefined]
**name** | **string** | The account holder\&#39;s name (whether an individual or a business). | [default to undefined]
**plaidProcessorToken** | **string** | Plaid integration token&lt;br /&gt;See Plaid processor token | [default to undefined]
**verifyName** | **boolean** | Optional, default to false. Verify a match between the name of the counterparty and the name of the external account\&#39;s owner as provided by Plaid. If the name verification fails the request will fail with code field set to NameVerificationFailed. | [optional] [default to undefined]
**permissions** | **string** | Optional, custom counterparty permissions. Either CreditOnly, DebitOnly, CreditAndDebit. Default is CreditAndDebit. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**idempotencyKey** | **string** | See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { CreateCounterpartyWithPlaidTokenDataAttributes } from 'unit-openapi-node-sdk';

const instance: CreateCounterpartyWithPlaidTokenDataAttributes = {
    type,
    name,
    plaidProcessorToken,
    verifyName,
    permissions,
    tags,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
