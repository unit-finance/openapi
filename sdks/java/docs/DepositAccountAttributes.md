

# DepositAccountAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**updatedAt** | **OffsetDateTime** | Optional. The date the resource was updated. |  [optional] |
|**name** | **String** | Name of the account holder. |  |
|**depositProduct** | **String** | The name of the deposit product. |  |
|**routingNumber** | **String** | Routing number of account. |  |
|**accountNumber** | **String** | Account number, together with the routingNumber forms the identifier of the account on the ACH network. |  |
|**currency** | **String** | Currency of the account. |  |
|**balance** | **Integer** | The balance amount (in cents). The balance represents the funds that are currently in the account (not taking into account future commitments). The balance equals the sum of &#39;available&#39; and &#39;hold&#39;. |  |
|**hold** | **Integer** | The hold amount (in cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. |  |
|**available** | **Integer** | The available balance for spending (in cents). Equals the balance minus the hold amount. |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |
|**status** | **String** | Status of the account, either Open, Frozen, or Closed. |  |
|**interestTerms** | [**TotalAccruedInterestType**](TotalAccruedInterestType.md) | The interest terms of the deposit account. Only available if extraFields[account] is used when calling the Get Account by Id endpoint. |  [optional] |
|**freezeReason** | **String** | Optional. The reason the account was frozen, either Fraud, ByBank, or free-text description. |  [optional] |
|**closeReason** | **String** | Optional. The reason the account was closed, either ByCustomer, Fraud or ByBank. |  [optional] |
|**fraudReason** | **String** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). |  [optional] |
|**dacaStatus** | **String** | Optional. The account DACA (Deposit Account Control Agreements) status. Can be one of: Entered, Activated. |  [optional] |



