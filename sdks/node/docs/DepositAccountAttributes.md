# DepositAccountAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | Optional. The date the resource was updated. | [optional] [default to undefined]
**name** | **string** | Name of the account holder. | [default to undefined]
**depositProduct** | **string** | The name of the deposit product. | [default to undefined]
**routingNumber** | **string** | Routing number of account. | [default to undefined]
**accountNumber** | **string** | Account number, together with the routingNumber forms the identifier of the account on the ACH network. | [default to undefined]
**currency** | **string** | Currency of the account. | [default to undefined]
**balance** | **number** | The balance amount (in cents). The balance represents the funds that are currently in the account (not taking into account future commitments). The balance equals the sum of \&#39;available\&#39; and \&#39;hold\&#39;. | [default to undefined]
**hold** | **number** | The hold amount (in cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. | [default to undefined]
**available** | **number** | The available balance for spending (in cents). Equals the balance minus the hold amount. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**status** | **string** | Status of the account, either Open, Frozen, or Closed. | [default to undefined]
**interestTerms** | [**TotalAccruedInterestType**](TotalAccruedInterestType.md) | The interest terms of the deposit account. Only available if extraFields[account] is used when calling the Get Account by Id endpoint. | [optional] [default to undefined]
**freezeReason** | **string** | Optional. The reason the account was frozen, either Fraud, ByBank, or free-text description. | [optional] [default to undefined]
**closeReason** | **string** | Optional. The reason the account was closed, either ByCustomer, Fraud or ByBank. | [optional] [default to undefined]
**fraudReason** | **string** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] [default to undefined]
**dacaStatus** | **string** | Optional. The account DACA (Deposit Account Control Agreements) status. Can be one of: Entered, Activated. | [optional] [default to undefined]

## Example

```typescript
import { DepositAccountAttributes } from 'unit-openapi-node-sdk';

const instance: DepositAccountAttributes = {
    createdAt,
    updatedAt,
    name,
    depositProduct,
    routingNumber,
    accountNumber,
    currency,
    balance,
    hold,
    available,
    tags,
    status,
    interestTerms,
    freezeReason,
    closeReason,
    fraudReason,
    dacaStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
