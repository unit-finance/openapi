# CreateCounterpartyDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The account holder\&#39;s name (whether an individual or a business, maximum of 50 characters). | [default to undefined]
**routingNumber** | **string** | Valid 9-digit ABA routing transit number. | [default to undefined]
**accountNumber** | **string** | Bank account number. | [default to undefined]
**accountType** | **string** | (defaults to checking). Either Checking, Savings or Loan. | [default to undefined]
**type** | **string** | Either Business, Person or Unknown. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**permissions** | **string** | Optional, custom counterparty permissions. Only DebitOnly or CreditAndDebit are valid values when using the permissions\&#39; attribute. \&#39;CreditOnly\&#39; will be assigned as default value when permissions attribute is not declared. If the account and routing number of the counterparty belong to an account under your org on Unit, you may specify \&quot;CreditAndDebit\&quot; or \&quot;DebitOnly\&quot; permissions as well. | [optional] [default to undefined]
**idempotencyKey** | **string** | See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { CreateCounterpartyDataAttributes } from 'unit-openapi-node-sdk';

const instance: CreateCounterpartyDataAttributes = {
    name,
    routingNumber,
    accountNumber,
    accountType,
    type,
    tags,
    permissions,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
