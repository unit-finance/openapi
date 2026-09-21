# CardFraudOutreachPolicyRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_outreach_settings** | [**Relationship**](Relationship.md) |  | [optional] 
**white_label_theme** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.card_fraud_outreach_policy_relationships import CardFraudOutreachPolicyRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CardFraudOutreachPolicyRelationships from a JSON string
card_fraud_outreach_policy_relationships_instance = CardFraudOutreachPolicyRelationships.from_json(json)
# print the JSON string representation of the object
print(CardFraudOutreachPolicyRelationships.to_json())

# convert the object into a dict
card_fraud_outreach_policy_relationships_dict = card_fraud_outreach_policy_relationships_instance.to_dict()
# create an instance of CardFraudOutreachPolicyRelationships from a dict
card_fraud_outreach_policy_relationships_from_dict = CardFraudOutreachPolicyRelationships.from_dict(card_fraud_outreach_policy_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


