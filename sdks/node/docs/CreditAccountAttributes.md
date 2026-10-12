# CreditAccountAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | Optional. The date the resource was updated. | [optional] [default to undefined]
**name** | **string** | Name of the account holder. | [default to undefined]
**creditTerms** | **string** | The selected credit terms. | [default to undefined]
**currency** | **string** | Currency of the account. | [default to undefined]
**creditLimit** | **number** | The credit limit (cents). | [default to undefined]
**balance** | **number** | The balance amount (cents). The balance represents the funds that are currently in the account (not taking into account future commitments). The balance equals the sum of settled transactions minus any repayments. | [default to undefined]
**hold** | **number** | The hold amount (cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. | [default to undefined]
**available** | **number** | The available balance for spending (cents). Equals the credit limit, minus the balance and hold amounts. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**status** | **string** | Status of the account, either Open, Frozen, or Closed. | [default to undefined]
**freezeReason** | **string** | Optional. The reason the account was frozen, either Fraud, ByBank, or free-text description. | [optional] [default to undefined]
**closeReason** | **string** | Optional. The reason the account was closed, either ByCustomer, Overdue or Fraud. | [optional] [default to undefined]
**closeReasonText** | **string** | Optional. An expanded free-text reason for account closure. | [optional] [default to undefined]
**fraudReason** | **string** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] [default to undefined]

## Example

```typescript
import { CreditAccountAttributes } from 'unit-openapi-node-sdk';

const instance: CreditAccountAttributes = {
    createdAt,
    updatedAt,
    name,
    creditTerms,
    currency,
    creditLimit,
    balance,
    hold,
    available,
    tags,
    status,
    freezeReason,
    closeReason,
    closeReasonText,
    fraudReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
