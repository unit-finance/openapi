# ACHCounterpartyAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**name** | **string** | The account holder\&#39;s name (whether an individual or a business). | [default to undefined]
**routingNumber** | **string** | Valid 9-digit ABA routing transit number. | [default to undefined]
**bank** | **string** | Name of the bank. | [default to undefined]
**accountNumber** | **string** | Bank account number. | [default to undefined]
**accountType** | **string** | Either Checking, Savings or Loan. | [default to undefined]
**type** | **string** | Either Business, Person or Unknown. | [default to undefined]
**permissions** | **string** | Either CreditOnly or CreditAndDebit. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]

## Example

```typescript
import { ACHCounterpartyAttributes } from 'unit-openapi-node-sdk';

const instance: ACHCounterpartyAttributes = {
    createdAt,
    name,
    routingNumber,
    bank,
    accountNumber,
    accountType,
    type,
    permissions,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
