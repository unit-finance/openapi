# CreatePolicyDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_phone** | [**PhoneType**](PhoneType.md) | The client support contact phone number. | 
**contact_url** | **str** | The client support contact URL. Should be a valid https URL. | 
**activities_look_back_period_hours** | **int** | Optional. The period in hours before the card fraud case was created, for which the card fraud case activities will be included in the case. Can be one of the following periods: 12, 24, 48, 72 | [optional] 
**case_expiration_period_hours** | **int** | Optional. The period in hours after the card fraud case was created, after which the card fraud case expires. Can be one of the following periods: 12, 24, 48, 72 | [optional] 
**number_of_card_activities** | **int** | Optional. The number of card activities that will be included in the card fraud case. Up to 5 activities max. | [optional] 
**business_recipient** | **str** | Optional. For business cards, controls who receives the fraud outreach email. One of: CardHolder (cardholder only; also the behavior when omitted) or CustomerAndCardHolder (cardholder on to, business customer cc&#39;d). | [optional] 
**fraud_rules_suppression_days** | **int** | Optional. Sets suppression window (1–7 days) for fraud rules following a confirmed legitimate transaction. Up to 7 days maximum. | [optional] 
**idempotency_key** | **str** | Optional. See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_policy_data_attributes import CreatePolicyDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePolicyDataAttributes from a JSON string
create_policy_data_attributes_instance = CreatePolicyDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreatePolicyDataAttributes.to_json())

# convert the object into a dict
create_policy_data_attributes_dict = create_policy_data_attributes_instance.to_dict()
# create an instance of CreatePolicyDataAttributes from a dict
create_policy_data_attributes_from_dict = CreatePolicyDataAttributes.from_dict(create_policy_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


