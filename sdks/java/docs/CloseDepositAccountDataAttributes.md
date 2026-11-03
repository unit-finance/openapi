

# CloseDepositAccountDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**reason** | **String** | The reason for closing the account. One of ByCustomer, Fraud, ByBank, NegativeBalance, BreachOfTermsAndConditions, NoAccountActivity, ProgramChange, ProgramClosed, or CustomerDeceased. |  |
|**reasonText** | **String** | Optional. Free-text reason (up to 255 characters). |  [optional] |
|**fraudReason** | **String** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). |  [optional] |
|**bankReason** | **String** | Optional. The expanded bank reason for closing the account when ByBank is specified as the reason. Can be one of: (ProhibitedBusiness, MissingCddEdd, NonUsOperations, SuspectedFraud, Unfunded, Inactive). This list is subject to change. |  [optional] |



