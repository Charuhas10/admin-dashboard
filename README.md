# Admin Dashboard

This is a simple admin dashboard built with **ReactJS** for internship assignment given by HireQuotient team and is hosted on [Netlify](https://hirequotient-dashboard-admin.netlify.app/).

## Features

- The data is fetched from a mock API given by HireQuotient team. [Link](https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json)
- It has a search bar that can filter on any property of the data.
- It has a pagination feature that can be used to navigate between pages and at max 10 records are displayed per page.
- If a search property is selected, then the **pagination** feature will work on the filtered data and will only show as many pages as required. For example, if there are 5 records that match the search criteria, then only 1 page will be shown and if 23 records match the search criteria, then 3 pages will be shown.
- You can jump from first page to last page and vice versa.
- **Multiple rows** can be selected by clicking on the checkbox on the left side of the row and the selected row will be highlighted.
- Selected rows will be _highlighted_ and then can be deleted by clicking on the delete button that will be rendered **_dynamically_** on the bottom of the page above the pagination feature. The delete button will be disabled if no rows are selected.
- A **_bulk delete button_** is also available at the top right corner that can be used to delete all the rows at once or delete the rows that have been filtered out by the search bar.
- Edit and Delete action buttons are also present and can be used to edit or delete a particular row.
- Edit button will allow you to edit the data in the **_row itself_** and will render a Save or Discard action button.

![image](https://github.com/Charuhas10/admin-dashboard/assets/72398218/177e5509-abe8-4230-9cec-891a52e1a04d)

