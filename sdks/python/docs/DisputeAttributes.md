# DisputeAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | One of DebitCard or ACH | 
**status** | **str** | One of InvestigationStarted, ProvisionallyCredited, Denied, ResolvedLost, ResolvedWon. | 
**status_history** | [**List[DisputeAttributesStatusHistoryInner]**](DisputeAttributesStatusHistoryInner.md) | A dispute status list with the status date. Possible statuses are InvestigationStarted, ProvisionallyCredited, Denied, ResolvedLost, ResolvedWon. | 
**description** | **str** | Dispute description. | 
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | The date the resource was updated. | [optional] 
**amount** | **int** | The amount (cents) of the payment. | 
**decision_reason** | **str** | Reason for a ResolvedLost status. | [optional] 
**dispute_type** | **str** | One of Issuer, Fraud, NonFraud. | [optional] 

## Example

```python
from unit_finance_sdk.models.dispute_attributes import DisputeAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeAttributes from a JSON string
dispute_attributes_instance = DisputeAttributes.from_json(json)
# print the JSON string representation of the object
print(DisputeAttributes.to_json())

# convert the object into a dict
dispute_attributes_dict = dispute_attributes_instance.to_dict()
# create an instance of DisputeAttributes from a dict
dispute_attributes_from_dict = DisputeAttributes.from_dict(dispute_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


