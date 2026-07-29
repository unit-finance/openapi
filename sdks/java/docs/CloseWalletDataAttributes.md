

# CloseWalletDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**reason** | **String** | The reason for closing the wallet. Either ByCustomer, Fraud, ByBank, or NegativeBalance. |  |
|**fraudReason** | **String** | Optional. The expanded fraud reason for closing the wallet when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). |  [optional] |
|**bankReason** | **String** | Optional. The expanded bank reason for closing the wallet when ByBank is specified as the reason. Can be one of: (ProhibitedBusiness, MissingCddEdd, NonUsOperations, SuspectedFraud). This list is subject to change. |  [optional] |



