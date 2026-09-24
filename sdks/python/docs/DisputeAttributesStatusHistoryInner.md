# DisputeAttributesStatusHistoryInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The dispute status. One of InvestigationStarted, ProvisionallyCredited, Denied, ResolvedLost, ResolvedWon. | [optional] 
**updated_at** | **datetime** | The date the status was set. | [optional] 

## Example

```python
from unit_finance_sdk.models.dispute_attributes_status_history_inner import DisputeAttributesStatusHistoryInner

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeAttributesStatusHistoryInner from a JSON string
dispute_attributes_status_history_inner_instance = DisputeAttributesStatusHistoryInner.from_json(json)
# print the JSON string representation of the object
print(DisputeAttributesStatusHistoryInner.to_json())

# convert the object into a dict
dispute_attributes_status_history_inner_dict = dispute_attributes_status_history_inner_instance.to_dict()
# create an instance of DisputeAttributesStatusHistoryInner from a dict
dispute_attributes_status_history_inner_from_dict = DisputeAttributesStatusHistoryInner.from_dict(dispute_attributes_status_history_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


