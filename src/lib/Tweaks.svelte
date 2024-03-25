<section>
  <h2>tweaks</h2>
  <form>
    <fieldset>
      <legend>TITLE</legend>
      <label class="field">
        title prefix
        <select>
          <option value="">&lt;none&gt;</option>
        </select>
      </label>
      <label class="field">
        custom prefix
        <input type="text" placeholder="<none>"/>
      </label>
      <label class="field">
        show artist name
        <select>
          <option value="collab">only collab</option>
        </select>
      </label>
      <label class="field">
        title suffix
        <input type="text" placeholder="<none>"/>
      </label>
    </fieldset>
    <fieldset>
      <legend>RATING</legend>
      <label class="field">
        rating separator
        <select>
          <option value="->">-></option>
        </select>
      </label>
      <label class="field"
        >custom separator
        <input type="text" placeholder="<none>"/>
      </label>
      <label class="field"
        >show "out of 10"
        <input type="checkbox" />
      </label>
    </fieldset>
    <fieldset>
      <legend>COMMENTS</legend>
      <label class="field"
        >comments go<br />below the ranking
        <input type="checkbox" />
      </label>
      <label class="field"
        >custom prefix
        <input type="text" />
      </label>
      <label class="field"
        >add new line after<br />comment
        <input type="checkbox" />
      </label>
    </fieldset>
  </form>
</section>

<style>
  form {
    height: 12rem;
    overflow-y: scroll;
    scrollbar-width: thin;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    border: none;

    --padding-val: 0.5rem;
    padding: var(--padding-val);
    margin: 0.5rem 0;
  }

  legend {
    margin: 0 calc(-1 * var(--padding-val));
  }

  .field {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.125rem 0;
  }

  .field :is(input, select) {
    height: 1.8rem;
    width: 7rem;
  }

  .field input[type='checkbox'] {
    width: 1rem;
    margin-right: 6rem;
  }
</style>
