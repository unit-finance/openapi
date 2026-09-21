# CardFraudOutreachPolicy

`CardFraudOutreachPolicy` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CardFraudOutreachPolicyAttributes**](CardFraudOutreachPolicyAttributes.md) |  | 
**relationships** | [**CardFraudOutreachPolicyRelationships**](CardFraudOutreachPolicyRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.card_fraud_outreach_policy import CardFraudOutreachPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of CardFraudOutreachPolicy from a JSON string
card_fraud_outreach_policy_instance = CardFraudOutreachPolicy.from_json(json)
# print the JSON string representation of the object
print(CardFraudOutreachPolicy.to_json())

# convert the object into a dict
card_fraud_outreach_policy_dict = card_fraud_outreach_policy_instance.to_dict()
# create an instance of CardFraudOutreachPolicy from a dict
card_fraud_outreach_policy_from_dict = CardFraudOutreachPolicy.from_dict(card_fraud_outreach_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


