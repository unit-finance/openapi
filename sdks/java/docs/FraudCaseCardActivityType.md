

# FraudCaseCardActivityType

Represents a card activity that is part of a TransactionCardFraudCase or AuthorizationCardFraudCase.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The id of the fraud case card activity. |  |
|**createdAt** | **OffsetDateTime** | The date the activity was created. |  |
|**activityType** | **String** | The type of the activity. Can be either Authorization or Transaction. |  |
|**cardActivityCreatedAt** | **OffsetDateTime** | The creation date of the original Authorization or Transaction the activity was created upon. |  |
|**cardActivity** | **String** | The id of the original Authorization or Transaction of the activity. |  |
|**location** | **String** | The location in which the activity occurred. |  |
|**merchant** | **String** | The name of the merchant of the activity. |  |
|**amount** | **Integer** | The amount (in cents) of the activity. |  |
|**decision** | **String** | The decision made for the activity. Can be one of Pending, Fraud, NoFraud. |  |
|**updatedAt** | **OffsetDateTime** | The date the activity was last updated. |  |



