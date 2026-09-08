# BusinessWalletCustomerRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.business_wallet_customer_relationships import BusinessWalletCustomerRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessWalletCustomerRelationships from a JSON string
business_wallet_customer_relationships_instance = BusinessWalletCustomerRelationships.from_json(json)
# print the JSON string representation of the object
print(BusinessWalletCustomerRelationships.to_json())

# convert the object into a dict
business_wallet_customer_relationships_dict = business_wallet_customer_relationships_instance.to_dict()
# create an instance of BusinessWalletCustomerRelationships from a dict
business_wallet_customer_relationships_from_dict = BusinessWalletCustomerRelationships.from_dict(business_wallet_customer_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


