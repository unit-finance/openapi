

# WalletAccountAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**name** | **String** | The official name. |  |
|**status** | **String** | Status of the account, either Open, Frozen, or Closed. |  |
|**walletTerms** | **String** | The name of the wallet terms. |  |
|**routingNumber** | **String** | Routing number of wallet. |  |
|**accountNumber** | **String** | Account number, together with the routingNumber forms the identifier of the wallet on the ACH network. |  |
|**currency** | **String** | Currency of the wallet. |  |
|**balance** | **Integer** | The balance amount (in cents). The balance represents the funds that are currently in the wallet (not taking into account future commitments). The balance equals the sum of &#39;available&#39; and &#39;hold&#39;. |  |
|**hold** | **Integer** | The hold amount (in cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. |  |
|**available** | **Integer** | The available balance for spending (in cents). Equals the balance minus the hold amount. |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |
|**freezeReason** | **String** | Optional. The reason the wallet was frozen, either Fraud, ByBank, or free-text description. |  [optional] |
|**closeReason** | **String** | Optional. The reason the wallet was closed, either ByCustomer or Fraud. |  [optional] |
|**fraudReason** | **String** | Optional. The expanded fraud reason for closing the wallet when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). |  [optional] |



