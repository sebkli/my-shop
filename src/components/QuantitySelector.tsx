import React, { Component } from 'react';

interface Props {
  stock: number;
  onAddToCart: (quantity: number) => void;
}

interface State {
  quantity: number;
}

class QuantitySelector extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(
      1,
      Math.min(this.props.stock, parseInt(event.target.value) || 1)
    );
    console.log(value);
    this.setState({ quantity: value });
  };

  handleAddToCart = () => {
    this.props.onAddToCart(this.state.quantity);
  };

  render() {
    return (
      <div className="my-4 flex items-center">
        <input
          type="number"
          value={this.state.quantity}
          onChange={this.handleChange}
          className="border p-2 w-16 text-center text-black"
        />
        <button
          onClick={this.handleAddToCart}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 hover:cursor-pointer"
          disabled={this.props.stock === 0}
        >
          Dodaj do koszyka
        </button>
      </div>
    );
  }
}

export default QuantitySelector;
