# CardFraudOutreachPolicyAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**activities_look_back_period_hours** | **int** | The period in hours before the card fraud case was created, for which the card fraud case activities were included in the case. Can be one of the following periods: 12, 24, 48, 72 | 
**case_expiration_period_hours** | **int** | The period in hours after the card fraud case was created, after which the card fraud case expires. Can be one of the following periods: 12, 24, 48, 72. | 
**number_of_card_activities** | **int** | The number of card activities that are included in the card fraud case. Up to 5 activities max. | 
**business_recipient** | **str** | For business cards, controls who receives the fraud outreach email. One of: CardHolder or CustomerAndCardHolder. When omitted or null, email goes to the cardholder only. | [optional] 
**contact_phone** | [**PhoneType**](PhoneType.md) | The client support contact phone number. | 
**contact_url** | **str** | The client support contact URL. | 
**enabled** | **bool** | Indicates whether the policy is enabled. | 

## Example

```python
from unit_finance_sdk.models.card_fraud_outreach_policy_attributes import CardFraudOutreachPolicyAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CardFraudOutreachPolicyAttributes from a JSON string
card_fraud_outreach_policy_attributes_instance = CardFraudOutreachPolicyAttributes.from_json(json)
# print the JSON string representation of the object
print(CardFraudOutreachPolicyAttributes.to_json())

# convert the object into a dict
card_fraud_outreach_policy_attributes_dict = card_fraud_outreach_policy_attributes_instance.to_dict()
# create an instance of CardFraudOutreachPolicyAttributes from a dict
card_fraud_outreach_policy_attributes_from_dict = CardFraudOutreachPolicyAttributes.from_dict(card_fraud_outreach_policy_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


