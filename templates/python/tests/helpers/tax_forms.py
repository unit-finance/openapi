"""Tax-form helpers, the Python analogue of Node's ``helpers/taxForms.ts``."""

from typing import Optional

from .api import build_tax_forms_api, unwrap


def get_tax_form_id() -> Optional[str]:
    """A tax form id, or ``None`` when the org has none.

    Tax forms are issued by Unit once a year per customer; there is no operation
    to create one, so a sandbox org that has not crossed a tax year has nothing
    for the single-form read and the PDF download to address.
    """
    res = build_tax_forms_api().list_tax_forms_with_http_info()
    for tax_form in res.data.data or []:
        tax_form_id = getattr(unwrap(tax_form), "id", None)
        if isinstance(tax_form_id, str):
            return tax_form_id
    print(
        "This sandbox org has no tax forms (they are issued annually and cannot "
        "be created from the API); skipping."
    )
    return None
