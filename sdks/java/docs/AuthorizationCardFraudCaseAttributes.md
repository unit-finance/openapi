

# AuthorizationCardFraudCaseAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**status** | **String** | The status of the card fraud case. Can be one of Created, Active, Closed, Expired. |  |
|**decision** | **String** | The decision made for the card fraud case. Can be one of Pending, Fraud, NoFraud. |  |
|**expiresAt** | **OffsetDateTime** | The date the card fraud case expires. |  |
|**cardActivities** | [**List&lt;FraudCaseCardActivityType&gt;**](FraudCaseCardActivityType.md) | The card activities associated with the card fraud case. |  |
|**updatedAt** | **OffsetDateTime** | The date the resource was last updated. |  [optional] |



