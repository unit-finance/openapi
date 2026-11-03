# DepositAccountAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | Optional. The date the resource was updated. | [optional] [default to undefined]
**name** | **string** | Name of the account holder. | [default to undefined]
**depositProduct** | **string** | The name of the deposit product. | [default to undefined]
**routingNumber** | **string** | Routing number of account (9 digits). | [default to undefined]
**accountNumber** | **string** | Optional. Account number (10-12 digits), together with the routingNumber forms the identifier of the account on the ACH network. | [optional] [default to undefined]
**secondaryAccountNumber** | [**DepositAccountAttributesSecondaryAccountNumber**](DepositAccountAttributesSecondaryAccountNumber.md) |  | [optional] [default to undefined]
**currency** | **string** | Currency of the account. | [default to undefined]
**balance** | **number** | The balance amount (in cents). The balance represents the funds that are currently in the account (not taking into account future commitments). The balance equals the sum of \&#39;available\&#39; and \&#39;hold\&#39;. | [default to undefined]
**hold** | **number** | The hold amount (in cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. | [default to undefined]
**available** | **number** | The available balance for spending (in cents). Equals the balance minus the hold amount. | [default to undefined]
**overdraftLimit** | **number** | Optional. Overdraft limit in cents. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**status** | **string** | Status of the account, either Open, Frozen, or Closed. | [default to undefined]
**interestTerms** | [**TotalAccruedInterestType**](TotalAccruedInterestType.md) | The interest terms of the deposit account. Only available if extraFields[account] is used when calling the Get Account by Id endpoint. | [optional] [default to undefined]
**freezeReason** | **string** | Optional. The reason the account was frozen, either Fraud, ByBank, or free-text description. | [optional] [default to undefined]
**closeReason** | **string** | Optional. The reason the account was closed (for example ByCustomer, Fraud, ByBank, or NegativeBalance). | [optional] [default to undefined]
**closeReasonText** | **string** | Optional. Free-text close reason details (up to 255 characters). | [optional] [default to undefined]
**fraudReason** | **string** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] [default to undefined]
**maskedAccountNumber** | **string** | Optional. Masked account number. Only available if extraFields[account]&#x3D;maskedAccountNumber is used. | [optional] [default to undefined]
**isOverdrawnWithinLimit** | **boolean** | Optional. Whether the account is overdrawn while still within the configured overdraft limit. | [optional] [default to undefined]
**dacaStatus** | **string** | Optional. The account DACA (Deposit Account Control Agreements) status. Can be one of: Entered, Activated. | [optional] [default to undefined]
**dacaOperators** | **Array&lt;string&gt;** | Optional. DACA operators. Values can include Org, Unit, and Bank. | [optional] [default to undefined]

## Example

```typescript
import { DepositAccountAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: DepositAccountAttributes = {
    createdAt,
    updatedAt,
    name,
    depositProduct,
    routingNumber,
    accountNumber,
    secondaryAccountNumber,
    currency,
    balance,
    hold,
    available,
    overdraftLimit,
    tags,
    status,
    interestTerms,
    freezeReason,
    closeReason,
    closeReasonText,
    fraudReason,
    maskedAccountNumber,
    isOverdrawnWithinLimit,
    dacaStatus,
    dacaOperators,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
