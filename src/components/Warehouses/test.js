{!loading && warehouseList && warehouseList.length > 0 && (
    <>
      {warehouseList.map((warehouse) => (
        <div key={warehouse.id}>
          <Link to={`/${warehouse.id}`}>
            <p>{warehouse.warehouse_name}</p>
          </Link>
          <p>{warehouse.address}</p>
          <p>{warehouse.city}</p>
          <p>{warehouse.country}</p>
          <p>{warehouse.contact_name}</p>
          <p>{warehouse.contact__phone}</p>
          <p>{warehouse.contact__email}</p>
        </div>
      ))}