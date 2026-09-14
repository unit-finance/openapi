# ArchiveCustomerDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason for archiving the customer. One of Inactive, FraudACHActivity, FraudCardActivity, FraudCheckActivity, FraudApplicationHistory, FraudAccountActivity, FraudClientIdentified, FraudLinkedToFraudulentCustomer, ByBank. This list is subject to change. | 

## Example

```python
from unit_finance_sdk.models.archive_customer_data_attributes import ArchiveCustomerDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ArchiveCustomerDataAttributes from a JSON string
archive_customer_data_attributes_instance = ArchiveCustomerDataAttributes.from_json(json)
# print the JSON string representation of the object
print(ArchiveCustomerDataAttributes.to_json())

# convert the object into a dict
archive_customer_data_attributes_dict = archive_customer_data_attributes_instance.to_dict()
# create an instance of ArchiveCustomerDataAttributes from a dict
archive_customer_data_attributes_from_dict = ArchiveCustomerDataAttributes.from_dict(archive_customer_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


