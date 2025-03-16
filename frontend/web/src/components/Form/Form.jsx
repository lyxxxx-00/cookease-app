const Form = () => {
  return (
    <div className="min-h-screen bg-orange-400">
      <form className="pt-20 flex flex-col items-center space-y-4 py-8">
        <div className="pt-4 flex flex-row items-left">
          <label>Ingredients</label>
          <input type="text" placeholder="please enter ingredients you have" />
        </div>
        <div>
          <label>Cook Time</label>
          <select>
            <option value="0-15">15 minutes</option>
            <option value="15-30">30 minutes</option>
            <option value="30-45">1 hour</option>
          </select>
        </div>
        <div>
          <label>Requirements</label>
          <input
            type="text"
            placeholder="please enter other requirements like allergy"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
