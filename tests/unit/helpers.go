package helpers

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/core-engine/core-engine/config"
)

func parseResponse(r *http.Response) (map[string]interface{}, error) {
	defer r.Body.Close()
	var data map[string]interface{}
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		return nil, err
	}
	return data, nil
}

func getHeaderValue(r *http.Response, key string) (string, error) {
	value := r.Header.Get(key)
	if value == "" {
		return "", errors.New("header not found")
	}
	return value, nil
}

func parseQueryParams(r *http.Request) (map[string]string, error) {
	params := make(map[string]string)
	for key, values := range r.URL.Query() {
		if len(values) > 0 {
			params[key] = values[0]
		}
	}
	return params, nil
}

func stringToInt(s string) (int, error) {
	i, err := strconv.Atoi(s)
	if err != nil {
		return 0, err
	}
	return i, nil
}

func intToString(i int) string {
	return strconv.Itoa(i)
}

func getCurrentTime() string {
	return time.Now().Format(time.RFC3339)
}

func logError(err error) {
	log.Printf("error: %v", err)
}

func loadConfig() (*config.Config, error) {
	c, err := config.LoadConfig()
	if err != nil {
		return nil, err
	}
	return c, nil
}

func splitString(s string, sep string) []string {
	return strings.Split(s, sep)
}

func parseBool(b string) (bool, error) {
	if b == "true" {
		return true, nil
	} else if b == "false" {
		return false, nil
	} else {
		return false, errors.New("invalid boolean value")
	}
}