

# CreditAccountAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**updatedAt** | **OffsetDateTime** | Optional. The date the resource was updated. |  [optional] |
|**name** | **String** | Name of the account holder. |  |
|**creditTerms** | **String** | The selected credit terms. |  |
|**currency** | **String** | Currency of the account. |  |
|**creditLimit** | **Integer** | The credit limit (cents). |  |
|**balance** | **Integer** | The balance amount (cents). The balance represents the funds that are currently in the account (not taking into account future commitments). The balance equals the sum of settled transactions minus any repayments. |  |
|**hold** | **Integer** | The hold amount (cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. |  |
|**available** | **Integer** | The available balance for spending (cents). Equals the credit limit, minus the balance and hold amounts. |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |
|**status** | **String** | Status of the account, either Open, Frozen, or Closed. |  |
|**freezeReason** | **String** | Optional. The reason the account was frozen, either Fraud, ByBank, or free-text description. |  [optional] |
|**closeReason** | **String** | Optional. The reason the account was closed, either ByCustomer, Overdue or Fraud. |  [optional] |
|**closeReasonText** | **String** | Optional. An expanded free-text reason for account closure. |  [optional] |
|**fraudReason** | **String** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). |  [optional] |



