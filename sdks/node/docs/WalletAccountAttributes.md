# WalletAccountAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**name** | **string** | The official name. | [default to undefined]
**status** | **string** | Status of the account, either Open, Frozen, or Closed. | [default to undefined]
**walletTerms** | **string** | The name of the wallet terms. | [default to undefined]
**routingNumber** | **string** | Routing number of wallet. | [default to undefined]
**accountNumber** | **string** | Account number, together with the routingNumber forms the identifier of the wallet on the ACH network. | [default to undefined]
**currency** | **string** | Currency of the wallet. | [default to undefined]
**balance** | **number** | The balance amount (in cents). The balance represents the funds that are currently in the wallet (not taking into account future commitments). The balance equals the sum of \&#39;available\&#39; and \&#39;hold\&#39;. | [default to undefined]
**hold** | **number** | The hold amount (in cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. | [default to undefined]
**available** | **number** | The available balance for spending (in cents). Equals the balance minus the hold amount. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**freezeReason** | **string** | Optional. The reason the wallet was frozen, either Fraud, ByBank, or free-text description. | [optional] [default to undefined]
**closeReason** | **string** | Optional. The reason the wallet was closed, either ByCustomer or Fraud. | [optional] [default to undefined]
**fraudReason** | **string** | Optional. The expanded fraud reason for closing the wallet when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] [default to undefined]

## Example

```typescript
import { WalletAccountAttributes } from 'unit-openapi-node-sdk';

const instance: WalletAccountAttributes = {
    createdAt,
    name,
    status,
    walletTerms,
    routingNumber,
    accountNumber,
    currency,
    balance,
    hold,
    available,
    tags,
    freezeReason,
    closeReason,
    fraudReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
