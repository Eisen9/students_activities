import React from "react";

function Search() {
  return (
    <div class="search-box">
      <table class="search-elements">
        <tr>
          <td>
            <input type="text" placeholder="Search for a specific event..." class="search" />
          </td>
          <td>
            <a href="#">
              <span class="material-icons">search</span>
            </a>
          </td>
          <td>
            <a href="#">
              <span class="material-icons">filter_alt</span>
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Search;
