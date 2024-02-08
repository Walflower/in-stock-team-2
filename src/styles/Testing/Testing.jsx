import "./Testing.scss";

export default function Testing() {
	return (
		<div className="Testing">
			<h1>Testing</h1>

			<p>button Testing</p>
			<button className="Testing__cta--primary"></button>
			<button className="Testing__cta--mobile">mobile</button>
			<button className="Testing__cta--second--dt">Cancel</button>
			<button className="Testing__cta--second--m">cancel m</button>
			<button className="Testing__cta--delete--dt">Delete dt</button>
			<button className="Testing__cta--delete--m">Delete m</button>

			<p>link testing</p>
			<p>
				<a href="../Testing" className="Testing__cta--link--dt">
					Google
				</a>
			</p>
			<p>
				<a href="../Testing" className="Testing__cta--link--m">
					Google
				</a>
			</p>

			<form className="Testing__form" action="">
				<div className="Testing__text">
					<label className="Testing__label-dt">Item Name</label>
					<input className="Testing__text-dt" type="text" placeholder="Item Name" required></input>
					<label className="Testing__label-m">Item Name</label>
					<input className="Testing__text-m" type="text" placeholder="Item Name" required></input>
				</div>

				<div className="Testing__drop">
					<label className="Label__drop--dt">Warehouse</label>
					<select
						name="Warehouse"
						id="Warehouse"
						className="Input__drop--dt"
						placeholder="Please Select"
						required>
						<option value="1">Manhattan</option>
						<option value="2">New York</option>
					</select>
					<br />
					<label className="Label__drop--m">Warehouse</label>
					<select name="Warehouse" id="Warehouse" className="Input__drop--m" required>
						<option value="">Please Select</option>
						<option value="1">Manhattan</option>
					</select>
				</div>

				<div className="Testing__search">
					<input className="Input__search-dt" type="search" placeholder="Search..." />
					<input className="Input__search-m" type="search" placeholder="Search..." />
				</div>

				<div className="Testing__radio">
					<label className="form__label--m">Status</label>
					<label className="radio__label--m">
						<input type="radio" className="radio__btn" name="status" />
						<span>In stock</span>
					</label>
					<label className="radio__label--m">
						<input type="radio" className="radio__btn" name="status" />
						<span>Out of stock</span>
					</label>
					<label className="form__label--dt">Status</label>
					<label className="radio__label--dt">
						<input type="radio" className="radio__btn" name="status" />
						<span>In stock</span>
					</label>
					<label className="radio__label--dt">
						<input type="radio" className="radio__btn" name="status" />
						<span>Out of stock</span>
					</label>
				</div>
			</form>
		</div>
	);
}
