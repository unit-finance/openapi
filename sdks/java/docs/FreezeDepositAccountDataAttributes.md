

# FreezeDepositAccountDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**reason** | **String** | One of Fraud, ByBank, or Other. |  |
|**subReason** | **String** | Optional for Fraud and required for ByBank. For Fraud: AchActivity, CardActivity, AccountActivity, CheckActivity, WireActivity, HoldHarmlessReceived, LinkedToFraudulentCustomer. For ByBank: ProhibitedBusiness, MissingCddEdd, NonUsOperations, SuspectedFraud, Inactive, Unfunded, OngoingReevaluation, LegalRequestReceived, ErroneousPayment, Other. |  [optional] |
|**reasonText** | **String** | Required when reason&#x3D;Other (1..255). Optional for Fraud and ByBank (max 255). |  [optional] |



