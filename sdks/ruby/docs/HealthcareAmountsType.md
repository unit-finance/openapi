# UnitFinanceSdk::HealthcareAmountsType

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **dental_amount** | **Integer** | Dental expense (cents). |  |
| **transit_amount** | **Integer** | Transit expense (cents). |  |
| **vision_optical_amount** | **Integer** | Vision expense (cents). |  |
| **prescription_rx_amount** | **Integer** | Prescription drugs expense (cents). |  |
| **clinic_other_qualified_medical_amount** | **Integer** | Misc medical expense (cents). |  |
| **total_healthcare_amount** | **Integer** | Total medical expense (cents). |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::HealthcareAmountsType.new(
  dental_amount: null,
  transit_amount: null,
  vision_optical_amount: null,
  prescription_rx_amount: null,
  clinic_other_qualified_medical_amount: null,
  total_healthcare_amount: null
)
```

