

# DepositAccountAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**updatedAt** | **OffsetDateTime** | Optional. The date the resource was updated. |  [optional] |
|**name** | **String** | Name of the account holder. |  |
|**depositProduct** | **String** | The name of the deposit product. |  |
|**routingNumber** | **String** | Routing number of account (9 digits). |  |
|**accountNumber** | **String** | Optional. Account number (10-12 digits), together with the routingNumber forms the identifier of the account on the ACH network. |  [optional] |
|**secondaryAccountNumber** | [**DepositAccountAttributesSecondaryAccountNumber**](DepositAccountAttributesSecondaryAccountNumber.md) |  |  [optional] |
|**currency** | **String** | Currency of the account. |  |
|**balance** | **Integer** | The balance amount (in cents). The balance represents the funds that are currently in the account (not taking into account future commitments). The balance equals the sum of &#39;available&#39; and &#39;hold&#39;. |  |
|**hold** | **Integer** | The hold amount (in cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. |  |
|**available** | **Integer** | The available balance for spending (in cents). Equals the balance minus the hold amount. |  |
|**overdraftLimit** | **Integer** | Optional. Overdraft limit in cents. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |
|**status** | **String** | Status of the account, either Open, Frozen, or Closed. |  |
|**interestTerms** | [**TotalAccruedInterestType**](TotalAccruedInterestType.md) | The interest terms of the deposit account. Only available if extraFields[account] is used when calling the Get Account by Id endpoint. |  [optional] |
|**freezeReason** | **String** | Optional. The reason the account was frozen, either Fraud, ByBank, or free-text description. |  [optional] |
|**closeReason** | **String** | Optional. The reason the account was closed (for example ByCustomer, Fraud, ByBank, or NegativeBalance). |  [optional] |
|**closeReasonText** | **String** | Optional. Free-text close reason details (up to 255 characters). |  [optional] |
|**fraudReason** | **String** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). |  [optional] |
|**maskedAccountNumber** | **String** | Optional. Masked account number. Only available if extraFields[account]&#x3D;maskedAccountNumber is used. |  [optional] |
|**isOverdrawnWithinLimit** | **Boolean** | Optional. Whether the account is overdrawn while still within the configured overdraft limit. |  [optional] |
|**dacaStatus** | **String** | Optional. The account DACA (Deposit Account Control Agreements) status. Can be one of: Entered, Activated. |  [optional] |
|**dacaOperators** | **List&lt;String&gt;** | Optional. DACA operators. Values can include Org, Unit, and Bank. |  [optional] |



