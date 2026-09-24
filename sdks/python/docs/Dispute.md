# Dispute

`Dispute` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**DisputeAttributes**](DisputeAttributes.md) |  | 
**relationships** | [**DisputeRelationships**](DisputeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.dispute import Dispute

# TODO update the JSON string below
json = "{}"
# create an instance of Dispute from a JSON string
dispute_instance = Dispute.from_json(json)
# print the JSON string representation of the object
print(Dispute.to_json())

# convert the object into a dict
dispute_dict = dispute_instance.to_dict()
# create an instance of Dispute from a dict
dispute_from_dict = Dispute.from_dict(dispute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


